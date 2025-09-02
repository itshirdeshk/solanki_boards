import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getalleventregistrations } from '@/Config'
import Swal from 'sweetalert2'
import { EventRegistrationPreview, PaymentStatus } from '@/lib/Interfaces'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterParams {
  search?: string;
  paymentStatus?: PaymentStatus | null;
}

const AllEventRegistrations = () => {
  const [registrations, setRegistrations] = useState<EventRegistrationPreview[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [filters, setFilters] = useState<FilterParams>({
    search: '',
    paymentStatus: null
  })
  const itemsPerPage = 9
  const navigate = useNavigate()

  const fetchEventRegistrations = async (page: number = currentPage, filterParams: FilterParams = filters) => {
    try {
      const token = localStorage.getItem('token') || 'hjj'
      if (!token) {
        navigate('/login')
        return
      }

      const params = new URLSearchParams({
        sortBy: 'createdAt',
        sortOrder: 'desc'
      })

      if (filterParams.search) {
        params.append('search', filterParams.search)
      }
      if (filterParams.paymentStatus) {
        params.append('paymentStatus', filterParams.paymentStatus)
      }

      const response = await axios.get(`${getalleventregistrations}?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      if (response.data.success) {
        setRegistrations(response.data.data.registrations)
        setTotalItems(response.data.data.total)
        setTotalPages(Math.ceil(response.data.data.total / itemsPerPage))
      }
    } catch (error: any) {
      console.error('Error fetching event registrations:', error)
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        navigate('/login')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch event registrations'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEventRegistrations()
  }, [])

  const handleRegistrationClick = async (id: string) => {
    const token = localStorage.getItem('token') || 'hjj'
    if (!token) {
      navigate('/login')
      return
    }

    await Swal.fire({
      title: 'Navigating...',
      text: 'Taking you to registration details',
      timer: 1000,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    navigate(`/event-registration-details/${id}`)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    fetchEventRegistrations(page)
  }

  const handleFilterChange = (key: keyof FilterParams, value: string | null) => {
    const newFilters = {
      ...filters,
      [key]: value
    }
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filter changes
    fetchEventRegistrations(1, newFilters)
  }

  const clearFilters = () => {
    const emptyFilters: FilterParams = {
      search: '',
      paymentStatus: null
    }
    setFilters(emptyFilters)
    setCurrentPage(1) // Reset to first page when clearing filters
    fetchEventRegistrations(1, emptyFilters)
  }

  const getPaymentStatusBadge = (status: PaymentStatus) => {
    const statusColors = {
      [PaymentStatus.SUCCESS]: 'bg-green-100 text-green-800',
      [PaymentStatus.PENDING]: 'bg-yellow-100 text-yellow-800',
      [PaymentStatus.FAILED]: 'bg-red-100 text-red-800',
      [PaymentStatus.CANCELLED]: 'bg-gray-100 text-gray-800',
      [PaymentStatus.DECLINED]: 'bg-red-100 text-red-800',
      [PaymentStatus.PROCESSING]: 'bg-blue-100 text-blue-800',
      [PaymentStatus.REFUNDED]: 'bg-purple-100 text-purple-800',
      [PaymentStatus.TIMED_OUT]: 'bg-orange-100 text-orange-800',
      [PaymentStatus.ERROR]: 'bg-red-100 text-red-800'
    }

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.replace('_', ' ')}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mr-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Registrations</h1>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="Search by name, email, phone, or registration number..."
              value={filters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="col-span-2"
            />
            
            <Select
              value={filters.paymentStatus || 'all'}
              onValueChange={(value) => handleFilterChange('paymentStatus', value === 'all' ? null : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value={PaymentStatus.SUCCESS}>Success</SelectItem>
                <SelectItem value={PaymentStatus.PENDING}>Pending</SelectItem>
                <SelectItem value={PaymentStatus.FAILED}>Failed</SelectItem>
                <SelectItem value={PaymentStatus.CANCELLED}>Cancelled</SelectItem>
                <SelectItem value={PaymentStatus.PROCESSING}>Processing</SelectItem>
              </SelectContent>
            </Select>
            
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>

          {/* Stats */}
          <div className="text-sm text-gray-600">
            Showing {registrations.length} of {totalItems} registrations
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Registration #</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Payment Amount</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Food Option</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((registration) => (
                <TableRow key={registration.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    {registration.registrationNumber || 'N/A'}
                  </TableCell>
                  <TableCell>
                    {registration.firstName} {registration.lastName}
                  </TableCell>
                  <TableCell>{registration.email}</TableCell>
                  <TableCell>{registration.phone}</TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(registration.paymentAmount)}
                  </TableCell>
                  <TableCell>
                    {getPaymentStatusBadge(registration.paymentStatus)}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      registration.optForFood 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {registration.optForFood ? 'Yes' : 'No'}
                    </span>
                  </TableCell>
                  <TableCell>
                    {formatDate(registration.createdAt.toString())}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleRegistrationClick(registration.id)}
                      size="sm"
                      variant="outline"
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 p-4 border-t">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
              >
                Previous
              </Button>
              
              <div className="flex space-x-1">
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2)
                  ) {
                    return (
                      <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        className="min-w-[40px]"
                      >
                        {page}
                      </Button>
                    )
                  } else if (page === currentPage - 3 || page === currentPage + 3) {
                    return <span key={page} className="px-2">...</span>
                  }
                  return null
                })}
              </div>
              
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
              >
                Next
              </Button>
            </div>
          )}
        </div>

        {/* Empty State */}
        {registrations.length === 0 && !loading && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-gray-500 text-lg mb-2">No event registrations found</div>
            <div className="text-gray-400">Try adjusting your filters or check back later.</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllEventRegistrations
