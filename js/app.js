// exam schduler timetable
var timetable = new Timetable();
var locations = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
timetable.setScope(8,20);
timetable.addLocations(locations);


// events for demo
const events = [
    // IT Courses
    {
        id: 1,
        title: "Introduction to Programming",
        room: "ROOM 1",
        location: "Monday",
        startTime: { hours: 9, minutes: 0 },
        endTime: { hours: 11, minutes: 0 },
        instructor: "Prof1",
        description: "Learn Python fundamentals",
        url: "/courses/prog101",
    },
    {
        id: 2,
        title: "Web Development",
        room: "CS Lab 205",
        location: "Tuesday",
        startTime: { hours: 13, minutes: 30 },
        endTime: { hours: 15, minutes: 30 },
        instructor: "Prof2",
        description: "HTML, CSS, and JavaScript basics",
        url: "/courses/web-dev"
    },
    {
        id: 5,
        title: "Introduction to Networking",
        room: "ROOM 5",
        location: "Monday",
        startTime: { hours: 9, minutes: 0 },
        endTime: { hours: 11, minutes: 0 },
        instructor: "Prof1",
        description: "Networking",
        url: "/courses/prog101",
    },

    // Finance Courses
    {
        id: 3,
        title: "Financial Accounting",
        room: "Business School Room 312",
        location: "Wednesday",
        startTime: { hours: 10, minutes: 0 },
        endTime: { hours: 12, minutes: 0 },
        instructor: "Prof3",
        description: "Principles of financial reporting",
        url: "/courses/fin-accounting",
    },
    // Medicine Courses
    {
        id: 4,
        title: "Anatomy 101",
        room: "Medical School Lab 3",
        location: "Thursday",
        startTime: { hours: 8, minutes: 0 },
        endTime: { hours: 10, minutes: 30 },
        instructor: "Prof5",
        description: "Human anatomy fundamentals",
        url: "/courses/anatomy"
    }
];
// Function to add events to timetable with a reference date
function scheduleEvents(referenceDate) {
    events.forEach(event => {
        // Create date objects using the reference date
        const startDate = new Date(referenceDate);
        startDate.setHours(event.startTime.hours, event.startTime.minutes, 0, 0);
        
        const endDate = new Date(referenceDate);
        endDate.setHours(event.endTime.hours, event.endTime.minutes, 0, 0);
        
        // Adjust date to match the day of week
        const dayOffset = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                          .indexOf(event.day) - referenceDate.getDay();
        startDate.setDate(startDate.getDate() + dayOffset);
        endDate.setDate(endDate.getDate() + dayOffset);

        timetable.addTimeslot(
            event.id,
            event.title,
            event.location,
            startDate,
            endDate,
            event.instructor,
            event.description,
            event.url,
            [
                {
                    label: '✏️',
                    class: 'edit',
                    callback: () => window.location.href = `/edit/${event.id}`
                },
                {
                    label: '🗑️',
                    class: 'delete',
                    callback: () => {
                        if (confirm(`Delete ${event.title} timeslot?`)) {
                         
                        }
                    }
                }
            ]
        );
    });
}

scheduleEvents(new Date()); 


var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable');