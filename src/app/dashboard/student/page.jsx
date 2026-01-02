import DashboardLayout from "@/components/layout/DashboardLayout";
export default function StudentsDashboardPage() {
    return (
        <DashboardLayout>
            <div className="col-lg-10 col-md-9 dashboard-content">
                <div className="card welcome-card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h1 className="mb-3">Welcome back, John!</h1>
                                <p className="mb-0">You have 2 upcoming assignments and 1 class today at 10:30 AM. Your overall academic performance is improving this semester. Keep up the great work!</p>
                            </div>
                            <div className="col-md-4 text-md-end">
                                <div className="d-inline-block p-3 rounded-circle bg-white shadow-sm">
                                    <i className="bi bi-mortarboard-fill text-primary" style={{ fontSize: '3rem' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="stat-card">
                            <div className="stat-number">4.2</div>
                            <div className="stat-label">GPA Score</div>
                            <small className="text-success"><i className="bi bi-arrow-up"></i> +0.3 from last term</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="stat-card">
                            <div className="stat-number">12</div>
                            <div className="stat-label">Active Courses</div>
                            <small className="text-primary">4 core, 8 elective</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="stat-card">
                            <div className="stat-number">87%</div>
                            <div className="stat-label">Attendance Rate</div>
                            <small className="text-warning"><i className="bi bi-dash"></i> 2% from last month</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="stat-card">
                            <div className="stat-number">5</div>
                            <div className="stat-label">Pending Assignments</div>
                            <small className="text-danger">2 due this week</small>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="card dashboard-card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span>Current Courses & Progress</span>
                                <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <h6 className="mb-2">Mathematics <span className="badge bg-primary float-end">92%</span></h6>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '92%' }}></div>
                                        </div>
                                        <p className="small text-muted mb-2">Algebra & Geometry</p>
                                        <div>
                                            <span className="subject-badge subject-math">Algebra</span>
                                            <span className="subject-badge subject-math">Geometry</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h6 className="mb-2">Science <span className="badge bg-success float-end">88%</span></h6>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" style={{ width: '88%' }}></div>
                                        </div>
                                        <p className="small text-muted mb-2">Biology & Chemistry</p>
                                        <div>
                                            <span className="subject-badge subject-science">Biology</span>
                                            <span className="subject-badge subject-science">Chemistry</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h6 className="mb-2">English <span className="badge bg-purple float-end">85%</span></h6>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '85%', backgroundColor: '#6f42c1' }}></div>
                                        </div>
                                        <p className="small text-muted mb-2">Literature & Writing</p>
                                        <div>
                                            <span className="subject-badge subject-english">Literature</span>
                                            <span className="subject-badge subject-english">Writing</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h6 className="mb-2">History <span className="badge bg-warning float-end">79%</span></h6>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" style={{ width: '79%' }}></div>
                                        </div>
                                        <p className="small text-muted mb-2">World History & Civics</p>
                                        <div>
                                            <span className="subject-badge subject-history">World History</span>
                                            <span className="subject-badge subject-history">Civics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card dashboard-card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span>Upcoming Classes</span>
                                <a href="#" className="btn btn-sm btn-outline-primary">Full Schedule</a>
                            </div>
                            <div className="card-body p-0">
                                <div className="class-item">
                                    <div className="class-time">10:30 AM</div>
                                    <div className="class-details">
                                        <div className="class-subject">Mathematics</div>
                                        <div className="class-teacher">Mr. Johnson • Room 204</div>
                                    </div>
                                </div>
                                <div className="class-item">
                                    <div className="class-time">01:15 PM</div>
                                    <div className="class-details">
                                        <div className="class-subject">Science Lab</div>
                                        <div className="class-teacher">Dr. Williams • Lab 3</div>
                                    </div>
                                </div>
                                <div className="class-item">
                                    <div className="class-time">03:00 PM</div>
                                    <div className="class-details">
                                        <div className="class-subject">English</div>
                                        <div className="class-teacher">Ms. Anderson • Room 112</div>
                                    </div>
                                </div>
                                <div className="class-item">
                                    <div className="class-time">Tomorrow • 09:00 AM</div>
                                    <div className="class-details">
                                        <div className="class-subject">History</div>
                                        <div className="class-teacher">Mr. Davis • Room 305</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card dashboard-card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span>Recent Assignments</span>
                                <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Assignment</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="subject-badge subject-math">Math</span></td>
                                                <td>Algebra Problem Set #5</td>
                                                <td>Tomorrow</td>
                                                <td><span className="badge bg-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="subject-badge subject-science">Science</span></td>
                                                <td>Chemistry Lab Report</td>
                                                <td>Feb 15</td>
                                                <td><span className="badge bg-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="subject-badge subject-english">English</span></td>
                                                <td>Essay: Shakespeare Analysis</td>
                                                <td>Feb 10</td>
                                                <td><span className="badge bg-success">Submitted</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="subject-badge subject-history">History</span></td>
                                                <td>WWII Timeline Project</td>
                                                <td>Feb 18</td>
                                                <td><span className="badge bg-secondary">Not Started</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <div className="card dashboard-card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span>February 2024</span>
                                <a href="#" className="btn btn-sm btn-outline-primary">Full Calendar</a>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col text-center">
                                        <button className="btn btn-sm btn-outline-primary"><i className="bi bi-chevron-left"></i></button>
                                        <span className="mx-3 fw-bold">February 2024</span>
                                        <button className="btn btn-sm btn-outline-primary"><i className="bi bi-chevron-right"></i></button>
                                    </div>
                                </div>

                                <div className="row text-center mb-2">
                                    <div className="col p-1"><strong>Mon</strong></div>
                                    <div className="col p-1"><strong>Tue</strong></div>
                                    <div className="col p-1"><strong>Wed</strong></div>
                                    <div className="col p-1"><strong>Thu</strong></div>
                                    <div className="col p-1"><strong>Fri</strong></div>
                                    <div className="col p-1"><strong>Sat</strong></div>
                                    <div className="col p-1"><strong>Sun</strong></div>
                                </div>

                                <div className="row text-center">
                                    <div className="col p-1"><div className="calendar-day">29</div></div>
                                    <div className="col p-1"><div className="calendar-day">30</div></div>
                                    <div className="col p-1"><div className="calendar-day">31</div></div>
                                    <div className="col p-1"><div className="calendar-day">1</div></div>
                                    <div className="col p-1"><div className="calendar-day">2</div></div>
                                    <div className="col p-1"><div className="calendar-day">3</div></div>
                                    <div className="col p-1"><div className="calendar-day">4</div></div>
                                </div>

                                <div className="row text-center">
                                    <div className="col p-1"><div className="calendar-day">5</div></div>
                                    <div className="col p-1"><div className="calendar-day">6</div></div>
                                    <div className="col p-1"><div className="calendar-day">7</div></div>
                                    <div className="col p-1"><div className="calendar-day">8</div></div>
                                    <div className="col p-1"><div className="calendar-day">9</div></div>
                                    <div className="col p-1"><div className="calendar-day">10</div></div>
                                    <div className="col p-1"><div className="calendar-day">11</div></div>
                                </div>

                                <div className="row text-center">
                                    <div className="col p-1"><div className="calendar-day">12</div></div>
                                    <div className="col p-1"><div className="calendar-day">13</div></div>
                                    <div className="col p-1"><div className="calendar-day event">14</div></div>
                                    <div className="col p-1"><div className="calendar-day active">15</div></div>
                                    <div className="col p-1"><div className="calendar-day">16</div></div>
                                    <div className="col p-1"><div className="calendar-day">17</div></div>
                                    <div className="col p-1"><div className="calendar-day">18</div></div>
                                </div>

                                <div className="row text-center">
                                    <div className="col p-1"><div className="calendar-day">19</div></div>
                                    <div className="col p-1"><div className="calendar-day">20</div></div>
                                    <div className="col p-1"><div className="calendar-day">21</div></div>
                                    <div className="col p-1"><div className="calendar-day">22</div></div>
                                    <div className="col p-1"><div className="calendar-day">23</div></div>
                                    <div className="col p-1"><div className="calendar-day">24</div></div>
                                    <div className="col p-1"><div className="calendar-day">25</div></div>
                                </div>

                                <div className="row text-center">
                                    <div className="col p-1"><div className="calendar-day">26</div></div>
                                    <div className="col p-1"><div className="calendar-day">27</div></div>
                                    <div className="col p-1"><div className="calendar-day">28</div></div>
                                    <div className="col p-1"><div className="calendar-day">29</div></div>
                                    <div className="col p-1"><div className="calendar-day">1</div></div>
                                    <div className="col p-1"><div className="calendar-day">2</div></div>
                                    <div className="col p-1"><div className="calendar-day">3</div></div>
                                </div>

                                <div className="mt-4">
                                    <h6 className="mb-3">Today's Events</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-3">
                                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                                <i className="bi bi-pencil"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="fw-medium">Math Assignment Due</div>
                                            <small className="text-muted">Due by 11:59 PM</small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                                <i className="bi bi-people"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="fw-medium">Science Group Study</div>
                                            <small className="text-muted">3:00 PM - Library</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}