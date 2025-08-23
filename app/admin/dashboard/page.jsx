'use client'
import React, { useState, useMemo, useEffect } from 'react';
import { Download, Filter, ChevronDown, ChevronUp, Users, Calendar, MapPin, Mail } from 'lucide-react';
import * as XLSX from 'xlsx';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';

import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

// Data will be fetched from Firestore
const sampleStudents = [];



function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [collegeFilter, setCollegeFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [accommodationFilter, setAccommodationFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push('/admin/signin'); 
      } else {
        setUser(currentUser);
        // Check user role
        try {
          const userDoc = await getDoc(doc(db, 'admins', currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.role === 'admin' || userData.role === 'editor') {
              setUserRole(userData.role);
            } else {
              // User doesn't have admin role
              alert('You are not authorized to access this dashboard');
              router.push('/admin/signin');
            }
          } else {
            // User document doesn't exist
            alert('You are not authorized to access this dashboard');
            router.push('/admin/signin');
          }
        } catch (error) {
          console.error('Error checking user role:', error);
          router.push('/admin/unauthorized');
        } finally {
          setRoleLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, [router]);


  // Fetch data from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "AutokritiRegistration"));
        const studentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudents(studentsData);
        setError(null);
      } catch (err) {
        console.error("Error fetching students:", err);
        setError("Failed to fetch students data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Get unique colleges and departments for filter options
  const uniqueColleges = useMemo(() => 
    Array.from(new Set(students.map(student => student.college))).sort()
  , [students]);

  const uniqueDepartments = useMemo(() => 
    Array.from(new Set(students.map(student => student.department))).sort()
  , [students]);

  // Filter students based on selected filters
  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesCollege = !collegeFilter || student.college === collegeFilter;
      const matchesDepartment = !departmentFilter || student.department === departmentFilter;
      const matchesAccommodation = !accommodationFilter || 
        (accommodationFilter === 'yes' && student.accommodation) ||
        (accommodationFilter === 'no' && !student.accommodation);
      return matchesCollege && matchesDepartment && matchesAccommodation;
    });
  }, [students, collegeFilter, departmentFilter, accommodationFilter]);


  const toggleRowExpansion = (studentId) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(studentId)) {
      newExpanded.delete(studentId);
    } else {
      newExpanded.add(studentId);
    }
    setExpandedRows(newExpanded);
  };

  const downloadExcel = () => {
    const worksheetData = students.map(student => ({
      'Name': student.name,
      'Email': student.email,
      'Phone': student.phone,
      'College': student.college,
      'Branch': student.branch,
      'Semester': student.semester,
      'Accommodation': student.accommodation ? 'Yes' : 'No',
      
      'Department': student.department,
      'Amount': student.amount,
      
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    
    // Auto-size columns
    const colWidths = Object.keys(worksheetData[0] || {}).map(key => ({
      wch: Math.max(key.length, Math.max(...worksheetData.map(row => String(row[key]).length)))
    }));
    worksheet['!cols'] = colWidths;

    XLSX.writeFile(workbook, `workshop_students_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const clearFilters = () => {
    setCollegeFilter('');
    setDepartmentFilter('');
    setAccommodationFilter('');
  };

  const handleSendEmail = (student) => {
    window.open(`mailto:${student.email}`);
  };

  // Show loading state while checking role
  if (roleLoading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-slate-300">Checking permissions...</p>
        </div>
      </div>
    );
  }

  // Show unauthorized message if user doesn't have admin role
  if (!userRole) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <p className="text-xl text-red-400 mb-4">Access Denied</p>
          <p className="text-slate-300 mb-6">You don't have permission to access this dashboard.</p>
          <button 
            onClick={() => router.push('/admin/signin')} 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-slate-300">Loading students data...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Admin Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">
                Logged in as: <span className="text-purple-400 font-medium">{user?.email}</span> 
                <span className="ml-2 px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                  {userRole}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-300">
                <Users className="w-5 h-5" />
                <span>{filteredStudents.length} Students</span>
              </div>
              <button
                onClick={downloadExcel}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Excel</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <span>🔄</span>
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Registrations</p>
                <p className="text-2xl font-bold text-white">{students.length}</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">With Accommodation</p>
                <p className="text-2xl font-bold text-white">
                  {students.filter(s => s.accommodation).length}
                </p>
              </div>
              <MapPin className="w-8 h-8 text-violet-500" />
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-white">
                  ₹{students.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-pink-500" />
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Unique Colleges</p>
                <p className="text-2xl font-bold text-white">{uniqueColleges.length}</p>
              </div>
              <Filter className="w-8 h-8 text-indigo-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Filters</h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
            
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Filter by College
                  </label>
                  <select
                    value={collegeFilter}
                    onChange={(e) => setCollegeFilter(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Colleges</option>
                    {uniqueColleges.map(college => (
                      <option key={college} value={college}>{college}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Filter by Department
                  </label>
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Departments</option>
                    {uniqueDepartments.map(department => (
                      <option key={department} value={department}>{department}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Filter by Accommodation
                  </label>
                  <select
                    value={accommodationFilter}
                    onChange={(e) => setAccommodationFilter(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Students</option>
                    <option value="yes">With Accommodation</option>
                    <option value="no">Without Accommodation</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Student Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    College
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredStudents.map((student) => (
                  <React.Fragment key={student.id}>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{student.name}</div>
                          <div className="text-sm text-slate-400">{student.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                        {student.college}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200">
                          {student.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-violet-400">
                        ₹{student.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleRowExpansion(student.id)}
                            className="text-purple-400 hover:text-purple-300 flex items-center space-x-1 transition-colors"
                          >
                            {expandedRows.has(student.id) ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                <span>Hide Details</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                <span>View Details</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleSendEmail(student)}
                            className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 transition-colors"
                            title={`Send email to ${student.email}`}
                          >
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {expandedRows.has(student.id) && (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 bg-slate-900">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-white border-b border-slate-700 pb-2">Contact Information</h4>
                              <div>
                                <span className="text-slate-400">Phone: </span>
                                <span className="text-white">{student.phone}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Email: </span>
                                <span className="text-white">{student.email}</span>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <h4 className="font-semibold text-white border-b border-slate-700 pb-2">Academic Details</h4>
                              <div>
                                <span className="text-slate-400">Branch: </span>
                                <span className="text-white">{student.branch}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Semester: </span>
                                <span className="text-white">{student.semester}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Accommodation: </span>
                                <span className={`${student.accommodation ? 'text-violet-400' : 'text-pink-400'}`}>
                                  {student.accommodation ? 'Yes' : 'No'}
                                </span>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <h4 className="font-semibold text-white border-b border-slate-700 pb-2">Registration Details</h4>
                              <div>
                                <span className="text-slate-400">Registration ID: </span>
                                <span className="text-white font-mono">{student.registrationId}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Transaction ID: </span>
                                <span className="text-white font-mono">{student.transactionId}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Time Slot: </span>
                                <span className="text-white">{student.timeSlot}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Registration Time: </span>
                                <span className="text-white text-xs">{new Date(student.registrationTime).toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            
            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-slate-400">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No students found</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 