// exam schduler timetable
var timetable = new Timetable();
var locations = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
timetable.setScope(8,20);
timetable.addLocations(locations);

// add example for demo
timetable.addTimeslot(1, 'Test event1', 'Monday', new Date(2015,7,17,10,0), new Date(2015,7,17,12,45), 'Person1', 'Event Introduction to AI', '', 
[
    {
        label: '✏️',
        class: 'edit',
        callback: function(e) { 
            window.location.href =  ``;
        }
    },
    {
        label: '🗑️',
        class: 'delete',
        callback: function(e) { 
            if (confirm('Do you really want to delete this timeslot?')) {
           
            }
        }
    }
]);



var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable');