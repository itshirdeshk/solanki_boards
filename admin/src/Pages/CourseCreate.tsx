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
import { createcourse, getallcourse, deleteCourse, getallsubject, updateCourse } from '../Config';
import { CoursePreview, SubjectPreview } from '../lib/Interfaces';
import Swal from 'sweetalert2';
import { Trash2, Pencil, ChevronDown, ChevronUp } from 'lucide-react';


// Define CourseType enum since it's missing in Interfaces.ts
enum CourseType {
  ACADEMIC = 'ACADEMIC',
  DIPLOMA = 'DIPLOMA',
  CERTIFICATE = 'CERTIFICATE',
  DEGREE = 'DEGREE',
  POST_GRADUATE = 'POST_GRADUATE',
  PHD = 'PHD'
}

enum DurationType {
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

// Define the form schema for course creation using zod
const courseSchema = z.object({
  name: z.string().min(1, "Course name is required"),
  fees: z.number(),
  courseType: z.nativeEnum(CourseType, {
    required_error: "Course type is required",
    invalid_type_error: "Course type must be one of the valid types"
  }),
  durationType: z.nativeEnum(DurationType, {
    required_error: "Duration type is required",
    invalid_type_error: "Duration type must be one of the valid types"
  }).optional(),
  duration: z.number().optional(),
});

type CourseFormValues = z.infer<typeof courseSchema>;

// Extended CoursePreview interface with subjects
interface CourseWithSubjects extends CoursePreview {
  subjects?: SubjectPreview[];
}

const CourseCreate = () => {
  const [courses, setCourses] = useState<CourseWithSubjects[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<CourseWithSubjects[]>([]);
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [filterName, setFilterName] = useState('');
  const [filterCourseType, setFilterCourseType] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  // Initialize the form
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: "",
      fees: 0,
      courseType: CourseType.ACADEMIC,
      duration: 2,
      durationType: DurationType.YEAR
    }
  });

  // Fetch all courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Filter courses based on search term
  useEffect(() => {
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [courses, filterName]);

  // Function to toggle course expansion
  const toggleCourseExpansion = (courseId: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  // Function to fetch courses and their subjects from API
  const fetchCourses = async (
    page = currentPage,
    name = filterName,
    courseType = filterCourseType
  ) => {
    try {
      setIsLoading(true);
      const skip = (page - 1) * itemsPerPage;
      const limit = itemsPerPage;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const body: any = { skip, limit };
      if (name) body.name = name;
      if (courseType) body.courseType = courseType;

      const courseResponse = await axios.post(getallcourse, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const subjectResponse = await axios.post(getallsubject, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      // Group subjects by courseId
      const subjectsByCourse: Record<string, SubjectPreview[]> = {};
      subjectResponse.data.forEach((subject: SubjectPreview) => {
        if (!subjectsByCourse[subject.courseId]) {
          subjectsByCourse[subject.courseId] = [];
        }
        subjectsByCourse[subject.courseId].push(subject);
      });

      // Add subjects to courses
      const coursesWithSubjects = courseResponse.data.courses
        ? courseResponse.data.courses.map((course: CoursePreview) => ({
          ...course,
          subjects: subjectsByCourse[course.id] || []
        }))
        : courseResponse.data.map((course: CoursePreview) => ({
          ...course,
          subjects: subjectsByCourse[course.id] || []
        }));

      setCourses(coursesWithSubjects);
      setFilteredCourses(coursesWithSubjects);
      setTotalItems(courseResponse.data.total || coursesWithSubjects.length);
      setTotalPages(Math.ceil((courseResponse.data.total || coursesWithSubjects.length) / itemsPerPage));
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

  // Function to create or update a course
  const onSubmit = async (data: CourseFormValues) => {
    try {
      setIsLoading(true);
      if (editingCourseId) {
        // Update course
        const updateData = {
          id: editingCourseId,
          name: data.name,
          fees: data.fees,
          duration: data.duration,
          durationType: data.durationType,
          courseType: data.courseType,
        };
        await axios.put(updateCourse, updateData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        Swal.fire({
          title: 'Success!',
          text: 'Course updated successfully!',
          icon: 'success',
          confirmButtonText: 'Great!'
        });
        setEditingCourseId(null);
      } else {
        // Create course
        await axios.post(createcourse, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        Swal.fire({
          title: 'Success!',
          text: 'Course created successfully!',
          icon: 'success',
          confirmButtonText: 'Great!'
        });
      }
      form.reset();
      fetchCourses();
    } catch (error) {
      console.error("Failed to create course", error);
      Swal.fire({
        title: 'Error!',
        text: editingCourseId ? 'Failed to update course. Please try again.' : 'Failed to create course. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to delete a course
  const handleDeleteCourse = async (id: string) => {
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
          await axios.delete(`${deleteCourse}/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          fetchCourses();
          Swal.fire(
            'Deleted!',
            'Course has been deleted.',
            'success'
          );
        } catch (error) {
          console.error("Failed to delete course", error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete course. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    });
  };

  // Function to handle edit click
  const handleEditCourse = (course: CourseWithSubjects) => {
    setEditingCourseId(course.id);
    form.setValue('name', course.name);
    form.setValue('fees', course.fees || 0);
    form.setValue('courseType', course.courseType as CourseType);
    form.setValue('durationType', course.durationType as DurationType);
    form.setValue('duration', course.duration || 1);
  };

  // Function to handle cancel edit
  const handleCancelEdit = () => {
    setEditingCourseId(null);
    form.reset();
  };

  // Add filter and pagination handlers
  const handleFilterChange = (name: string, value: string | null) => {
    if (name === 'name') setFilterName(value || '');
    if (name === 'courseType') setFilterCourseType(value);
    setCurrentPage(1);
    fetchCourses(1, name === 'name' ? value || '' : filterName, name === 'courseType' ? value : filterCourseType);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchCourses(page, filterName, filterCourseType);
  };

  const clearFilters = () => {
    setFilterName('');
    setFilterCourseType(null);
    setCurrentPage(1);
    fetchCourses(1, '', null);
  };

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-full">
      {/* Course Creation Form */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create New Course</CardTitle>
          <CardDescription>Add a new course to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Fees</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter course fees"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select course type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(CourseType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="durationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(DurationType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter duration of the course"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 1)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="md:col-span-4" disabled={isLoading}>
                {isLoading ? (editingCourseId ? "Updating..." : "Creating...") : (editingCourseId ? "Update Course" : "Create Course")}
              </Button>
              {editingCourseId && (
                <Button type="button" variant="secondary" className="md:col-span-4" onClick={handleCancelEdit}>
                  Cancel Edit
                </Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Filters for Course List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          placeholder="Filter by name"
          value={filterName}
          onChange={e => handleFilterChange('name', e.target.value)}
        />
        <Select
          value={filterCourseType || 'all'}
          onValueChange={val => handleFilterChange('courseType', val === 'all' ? null : val)}
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
        <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
      </div>

      {/* Course List */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Course List</CardTitle>
              <CardDescription>Manage existing courses</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {filterName || filterCourseType ? "No courses found matching your filters" : "No courses available"}
            </div>
          ) : (
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Fees</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCourses.map((course) => (
                    <>
                      <TableRow
                        key={course.id}
                        className={editingCourseId === course.id ? 'bg-gray-100 scale-[1.01] transition-all duration-300' : ''}
                      >
                        <TableCell className="font-medium">{course.name}</TableCell>
                        <TableCell>{course.courseType}</TableCell>
                        <TableCell>{course.fees ? `₹${course.fees}` : "N/A"}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => toggleCourseExpansion(course.id)}
                          >
                            {course.subjects && course.subjects.length > 0 ? (
                              <>
                                {course.subjects.length} Subject(s)
                                {expandedCourses[course.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </>
                            ) : (
                              "No subjects"
                            )}
                          </Button>
                        </TableCell>
                        <TableCell>
                          {course.durationType && course.duration ? `${course.duration} ${course.durationType}` : 'N/A'}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleEditCourse(course)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="icon"
                              className='text-white'
                              onClick={() => handleDeleteCourse(course.id)}
                            >
                              <Trash2 className="h-4 w-4 text-white" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      {expandedCourses[course.id] && course.subjects && course.subjects.length > 0 && (
                        <TableRow className="bg-gray-50">
                          <TableCell colSpan={6} className="p-0">
                            <div className="p-4">
                              <h4 className="font-medium mb-2">Subjects for {course.name}</h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Subject Name</TableHead>
                                    <TableHead>Type</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {course.subjects.map(subject => (
                                    <TableRow key={subject.id}>
                                      <TableCell>{subject.name}</TableCell>
                                      <TableCell>{subject.type}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
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
            <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
          </div>
          <div className="text-center mt-2 text-sm text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} courses
          </div>
        </CardContent>
      </Card>
    </div >
  );
};

export default CourseCreate;