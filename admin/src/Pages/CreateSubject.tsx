import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createsubject, getallsubject, deleteSubject, getallcourse, updateSubject } from '../Config';
import { CoursePreview, SubjectPreview } from '../lib/Interfaces';
import Swal from 'sweetalert2';
import { Trash2, Pencil } from 'lucide-react';

// Define SubjectType enum with correct values
enum SubjectType {
  LANGUAGE = 'LANGUAGE',
  NON_LANGUAGE = 'NON_LANGUAGE',
  VOCATIONAL = 'VOCATIONAL'
}

// Define CourseType enum (same as in CourseCreate.tsx)
enum CourseType {
  ACADEMIC = 'ACADEMIC',
  DIPLOMA = 'DIPLOMA',
  CERTIFICATE = 'CERTIFICATE',
  DEGREE = 'DEGREE',
  POST_GRADUATE = 'POST_GRADUATE',
  PHD = 'PHD'
}

// Interface for subject data


// Define the form schema for subject creation using zod
const subjectSchema = z.object({
  name: z.string().min(1, "Subject name is required"),
  code: z.string().min(1, "Subject code is required"),
  courseId: z.string().min(1, "Course is required"),
  type: z.nativeEnum(SubjectType, {
    required_error: "Subject type is required",
    invalid_type_error: "Subject type must be one of the valid types"
  })
});

type SubjectFormValues = z.infer<typeof subjectSchema>;

const CreateSubject = () => {
  const [courses, setCourses] = useState<CoursePreview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredSubjects, setFilteredSubjects] = useState<SubjectPreview[]>([]);
  const [editingSubjectId, setEditingSubjectId] = useState<string | null>(null);
  // Filter and pagination state
  const [filterName, setFilterName] = useState('');
  const [filterCode, setFilterCode] = useState('');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterCourseId, setFilterCourseId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;
  // Add state for courseType in creation and filter (separate)
  const [createCourseType, setCreateCourseType] = useState<CourseType | ''>('');
  const [filterCourseType, setFilterCourseType] = useState<CourseType | ''>('');
  const [creationCourses, setCreationCourses] = useState<CoursePreview[]>([]);
  const [filterCourses, setFilterCourses] = useState<CoursePreview[]>([]);

  // Initialize the form
  const form = useForm<SubjectFormValues>({
    resolver: zodResolver(subjectSchema),
    defaultValues: {
      name: "",
      code: "",
      courseId: courses[0]?.id || "",
      type: SubjectType.LANGUAGE
    }
  });

  // Fetch all subjects and courses on component mount
  useEffect(() => {
    fetchSubjects();
    fetchCourses();
  }, []);

  // Update creationCourses when createCourseType changes
  useEffect(() => {
    setCreationCourses(createCourseType ? courses.filter(c => c.courseType === createCourseType) : courses);
  }, [courses, createCourseType]);

  // Update filterCourses when filterCourseType changes
  useEffect(() => {
    setFilterCourses(filterCourseType ? courses.filter(c => c.courseType === filterCourseType) : courses);
  }, [courses, filterCourseType]);

  // Function to fetch subjects from API
  const fetchSubjects = async (
    page = currentPage,
    name = filterName,
    code = filterCode,
    type = filterType,
    courseId = filterCourseId
  ) => {
    try {
      setIsLoading(true);
      const skip = (page - 1) * itemsPerPage;
      const limit = itemsPerPage;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const body: any = { skip, limit };
      if (name) body.name = name;
      if (code) body.code = code;
      if (type) body.type = type;
      if (courseId) body.courseId = courseId;

      const response = await axios.post(getallsubject, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setFilteredSubjects(response.data.subjects || response.data);
      const total = response.data.total || (response.data.subjects ? response.data.subjects.length : response.data.length);
      setTotalItems(total);
      setTotalPages(Math.ceil(total / itemsPerPage));
    } catch (error) {
      console.error("Failed to fetch subjects", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to load subjects. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch courses for dropdown
  const fetchCourses = async (courseType?: CourseType | string) => {
    try {
      setIsLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const body: any = {};
      if (courseType) body.courseType = courseType;
      const response = await axios.post(getallcourse, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to load courses. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to create or update a subject
  const onSubmit = async (data: SubjectFormValues) => {
    try {
      setIsLoading(true);
      if (editingSubjectId) {
        // Update subject
        const updateData = {
          id: editingSubjectId,
          name: data.name,
          code: data.code,
          courseId: data.courseId,
          type: data.type,
        };
        await axios.put(updateSubject, updateData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        Swal.fire({
          title: 'Success!',
          text: 'Subject updated successfully!',
          icon: 'success',
          confirmButtonText: 'Great!'
        });
        setEditingSubjectId(null);
      } else {
        // Create subject
        await axios.post(createsubject, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        Swal.fire({
          title: 'Success!',
          text: 'Subject created successfully!',
          icon: 'success',
          confirmButtonText: 'Great!'
        });
      }
      form.reset({
        name: "",
        code: "",
        courseId: courses[0]?.id || "",
        type: SubjectType.LANGUAGE
      });
      fetchSubjects();
    } catch (error) {
      console.error("Failed to create/update subject", error);
      Swal.fire({
        title: 'Error!',
        text: editingSubjectId ? 'Failed to update subject. Please try again.' : 'Failed to create subject. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle edit click
  const handleEditSubject = (subject: SubjectPreview) => {
    setEditingSubjectId(subject.id);
    form.setValue('name', subject.name);
    form.setValue('code', subject.code);
    form.setValue('courseId', subject.courseId);
    form.setValue('type', subject.type as SubjectType);
  };

  // Function to handle cancel edit
  const handleCancelEdit = () => {
    setEditingSubjectId(null);
    form.reset();
  };

  // Function to delete a subject
  const handleDeleteSubject = async (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${deleteSubject}/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          fetchSubjects();
          Swal.fire(
            'Deleted!',
            'Subject has been deleted.',
            'success'
          );
        } catch (error) {
          console.error("Failed to delete subject", error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete subject. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    });
  };

  // Get course name by id
  const getCourseName = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    return course ? course.name : "Unknown Course";
  };

  // Filter and pagination handlers
  const handleFilterChange = (name: string, value: string | null) => {
    if (name === 'name') setFilterName(value || '');
    if (name === 'code') setFilterCode(value || '');
    if (name === 'type') {
      setFilterType(value);
      setFilterCourseId(null);
    }
    if (name === 'courseId') setFilterCourseId(value);
    setCurrentPage(1);
    fetchSubjects(1,
      name === 'name' ? value || '' : filterName,
      name === 'code' ? value || '' : filterCode,
      name === 'type' ? value : filterType,
      name === 'courseId' ? value : filterCourseId
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchSubjects(page, filterName, filterCode, filterType, filterCourseId);
  };

  const clearFilters = () => {
    setFilterName('');
    setFilterCode('');
    setFilterType(null);
    setFilterCourseId(null);
    setCurrentPage(1);
    fetchSubjects(1, '', '', null, null);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Subject Creation Form */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create New Subject</CardTitle>
          <CardDescription>Add a new subject to a course</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter subject name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter subject code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <FormLabel>Course Type</FormLabel>
                  <Select
                    value={createCourseType}
                    onValueChange={val => setCreateCourseType(val as CourseType)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select course type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(CourseType).map(type => (
                        <SelectItem key={type} value={type}>{type.replace('_', ' ')}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-1/2">
                  <FormField
                    control={form.control}
                    name="courseId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {creationCourses.map((course) => (
                              <SelectItem key={course.id} value={course.id}>
                                {course.name} {course.code ? `(${course.code})` : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(SubjectType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.replace('_', ' ')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
                <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                  {isLoading ? (editingSubjectId ? "Updating..." : "Creating...") : (editingSubjectId ? "Update Subject" : "Create Subject")}
                </Button>
                {editingSubjectId && (
                  <Button type="button" variant="secondary" className="w-full md:w-auto" onClick={handleCancelEdit}>
                    Cancel Edit
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Filters for Subject List */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <Input
          placeholder="Filter by name"
          value={filterName}
          onChange={e => handleFilterChange('name', e.target.value)}
        />
        <Input
          placeholder="Filter by code"
          value={filterCode}
          onChange={e => handleFilterChange('code', e.target.value)}
        />
        <Select
          value={filterType || 'all'}
          onValueChange={val => handleFilterChange('type', val === 'all' ? null : val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Subject Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {Object.values(SubjectType).map(type => (
              <SelectItem key={type} value={type}>{type.replace('_', ' ')}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filterCourseType || 'all'}
          onValueChange={val => {
            setFilterCourseType(val === 'all' ? '' : (val as CourseType));
            fetchCourses(val === 'all' ? undefined : val);
            setFilterCourseId(null);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Course Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {Object.values(CourseType).map(type => (
              <SelectItem key={type} value={type}>{type.replace('_', ' ')}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filterCourseId || 'all'}
          onValueChange={val => handleFilterChange('courseId', val === 'all' ? null : val)}
          disabled={filterCourses.length === 0}
        >
          <SelectTrigger>
            <SelectValue placeholder="Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            {filterCourses.map(course => (
              <SelectItem key={course.id} value={course.id}>{course.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
      </div>

      {/* Subject List */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Subject List</CardTitle>
              <CardDescription>Manage existing subjects</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
          ) : filteredSubjects.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {filterName || filterCode || filterType || filterCourseId ? "No subjects found matching your filters" : "No subjects available"}
            </div>
          ) : (
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubjects.map((subject) => (
                    <TableRow
                      key={subject.id}
                      className={editingSubjectId === subject.id ? 'bg-gray-100 scale-[1.01] transition-all duration-300' : ''}
                    >
                      <TableCell className="font-medium">{subject.name}</TableCell>
                      <TableCell>{subject.code}</TableCell>
                      <TableCell>{subject.type.replace('_', ' ')}</TableCell>
                      <TableCell>{subject.course?.name || getCourseName(subject.courseId)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEditSubject(subject)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className='text-white'
                            onClick={() => handleDeleteSubject(subject.id)}
                          >
                            <Trash2 className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button key={page} variant={currentPage === page ? "default" : "outline"} onClick={() => handlePageChange(page)}>{page}</Button>
            ))}
            <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>Next</Button>
          </div>
          <div className="text-center mt-2 text-sm text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} subjects
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateSubject;