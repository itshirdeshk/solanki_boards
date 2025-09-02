import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { geteventregistrationbyid, updateEventRegistrationPaymentStatus } from '@/Config'
import Swal from 'sweetalert2'
import { EventRegistrationDetails, PaymentStatus, Gender, EventDocumentType } from '@/lib/Interfaces'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const EventRegistrationDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [registration, setRegistration] = useState<EventRegistrationDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchRegistrationDetails()
  }, [id])

  const fetchRegistrationDetails = async () => {
    try {
      const token = localStorage.getItem('token') || 'hjj'
      if (!token) {
        navigate('/login')
        return
      }

      const response = await axios.get(`${geteventregistrationbyid}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      if (response.data.success) {
        setRegistration(response.data.data)
      } else {
        throw new Error('Failed to fetch registration details')
      }
    } catch (error: any) {
      console.error('Error fetching registration details:', error)
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        navigate('/login')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch registration details'
        }).then(() => {
          navigate('/event-registrations')
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const updatePaymentStatus = async () => {
    if (!registration || registration.paymentStatus !== PaymentStatus.PENDING) {
      return
    }

    try {
      const result = await Swal.fire({
        title: 'Update Payment Status',
        text: 'Are you sure you want to mark this payment as SUCCESS?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#10b981',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Yes, Update to Success',
        cancelButtonText: 'Cancel'
      })

      if (!result.isConfirmed) return

      setUpdating(true)
      const token = localStorage.getItem('token') || 'hjj'
      
      await axios.put(updateEventRegistrationPaymentStatus, {
        id: registration.id,
        paymentStatus: PaymentStatus.SUCCESS
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })

      // Update local state
      setRegistration(prev => prev ? { ...prev, paymentStatus: PaymentStatus.SUCCESS } : null)

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Payment status updated successfully',
        timer: 2000,
        showConfirmButton: false
      })

    } catch (error: any) {
      console.error('Error updating payment status:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update payment status'
      })
    } finally {
      setUpdating(false)
    }
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
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.replace('_', ' ')}
      </span>
    )
  }

  const formatDate = (dateString: string | Date) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatDateTime = (dateString: string | Date) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const getDocumentTypeLabel = (type: EventDocumentType) => {
    const labels = {
      [EventDocumentType.PROFILE_PICTURE]: 'Profile Picture',
      [EventDocumentType.PHOTOGRAPH]: 'Photograph',
      [EventDocumentType.AADHAR_CARD]: 'Aadhar Card',
      [EventDocumentType.PAN_CARD]: 'PAN Card',
      [EventDocumentType.EDUCATION_CERTIFICATE]: 'Education Certificate',
      [EventDocumentType.EXPERIENCE_LETTER]: 'Experience Letter',
      [EventDocumentType.PASSPORT]: 'Passport',
      [EventDocumentType.OTHER]: 'Other'
    }
    return labels[type] || type
  }

  const handleDocumentView = (fileUrl: string) => {
    window.open(fileUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!registration) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-500 text-lg mb-2">Registration not found</div>
              <Button onClick={() => navigate('/event-registrations')} variant="outline">
                Back to Event Registrations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="space-y-6 mr-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Button 
              onClick={() => navigate('/event-registrations')} 
              variant="outline"
              className="mb-4"
            >
              ← Back to Event Registrations
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">
              Event Registration Details
            </h1>
            <p className="text-gray-600 mt-2">
              Registration #{registration.registrationNumber || 'N/A'}
            </p>
          </div>
          <div className="flex flex-col items-end space-y-3">
            {getPaymentStatusBadge(registration.paymentStatus)}
            {registration.paymentStatus === PaymentStatus.PENDING && (
              <Button
                onClick={updatePaymentStatus}
                disabled={updating}
                className="bg-green-600 hover:bg-green-700"
              >
                {updating ? 'Updating...' : 'Mark as Paid'}
              </Button>
            )}
          </div>
        </div>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">First Name</label>
                <p className="mt-1 text-gray-900">{registration.firstName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Last Name</label>
                <p className="mt-1 text-gray-900">{registration.lastName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="mt-1 text-gray-900">{registration.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone</label>
                <p className="mt-1 text-gray-900">{registration.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                <p className="mt-1 text-gray-900">{formatDate(registration.dateOfBirth)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Gender</label>
                <p className="mt-1 text-gray-900">
                  {registration.gender === Gender.MALE ? 'Male' : 
                   registration.gender === Gender.FEMALE ? 'Female' : 'Other'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card>
          <CardHeader>
            <CardTitle>Address Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <label className="text-sm font-medium text-gray-500">Address</label>
                <p className="mt-1 text-gray-900">{registration.address}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">City</label>
                <p className="mt-1 text-gray-900">{registration.city}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">State</label>
                <p className="mt-1 text-gray-900">{registration.state}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Pincode</label>
                <p className="mt-1 text-gray-900">{registration.pincode}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Country</label>
                <p className="mt-1 text-gray-900">{registration.country}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Professional & Educational Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">Qualification</label>
                <p className="mt-1 text-gray-900">{registration.qualification || 'Not provided'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Institute Name</label>
                <p className="mt-1 text-gray-900">{registration.instituteName || 'Not provided'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Occupation</label>
                <p className="mt-1 text-gray-900">{registration.occupation || 'Not provided'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Organization Name</label>
                <p className="mt-1 text-gray-900">{registration.organizationName || 'Not provided'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Designation</label>
                <p className="mt-1 text-gray-900">{registration.designation || 'Not provided'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guardian Information */}
        {(registration.guardianName || registration.guardianPhone || registration.guardianRelation) && (
          <Card>
            <CardHeader>
              <CardTitle>Guardian Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Guardian Name</label>
                  <p className="mt-1 text-gray-900">{registration.guardianName || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Guardian Phone</label>
                  <p className="mt-1 text-gray-900">{registration.guardianPhone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Guardian Relation</label>
                  <p className="mt-1 text-gray-900">{registration.guardianRelation || 'Not provided'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">Contact Name</label>
                <p className="mt-1 text-gray-900">{registration.emergencyContactName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Contact Phone</label>
                <p className="mt-1 text-gray-900">{registration.emergencyContactPhone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Relation</label>
                <p className="mt-1 text-gray-900">{registration.emergencyContactRelation}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-500">How did you hear about us?</label>
                <p className="mt-1 text-gray-900">{registration.howDidYouHear || 'Not provided'}</p>
              </div>
              {registration.specialRequirements && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Special Requirements</label>
                  <p className="mt-1 text-gray-900">{registration.specialRequirements}</p>
                </div>
              )}
              {registration.previousExperience && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Previous Experience</label>
                  <p className="mt-1 text-gray-900">{registration.previousExperience}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">Payment Status</label>
                <div className="mt-1">{getPaymentStatusBadge(registration.paymentStatus)}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Payment Amount</label>
                <p className="mt-1 text-gray-900 font-semibold text-lg">
                  {formatCurrency(registration.paymentAmount)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Food Option</label>
                <p className="mt-1">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    registration.optForFood 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {registration.optForFood ? 'Yes' : 'No'}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        {registration.documents && registration.documents.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {registration.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        {getDocumentTypeLabel(doc.documentType)}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{doc.fileName}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {formatDate(doc.createdAt)}
                      </span>
                      <Button
                        onClick={() => handleDocumentView(doc.fileUrl)}
                        size="sm"
                        variant="outline"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Registration Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Registration Submitted</p>
                  <p className="text-sm text-gray-600">{formatDateTime(registration.createdAt)}</p>
                </div>
              </div>
              {registration.updatedAt !== registration.createdAt && (
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Last Updated</p>
                    <p className="text-sm text-gray-600">{formatDateTime(registration.updatedAt)}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EventRegistrationDetailsPage
