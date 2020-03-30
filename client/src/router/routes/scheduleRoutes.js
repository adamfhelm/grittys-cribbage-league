import Schedule from '@/views/schedules/Schedule.vue'
import ScheduleSetup from '@/views/admin/newSchedule.vue'
import AddWeek from '@/views/schedules/addWeek.vue'

const routes = [{      
    path: '/schedule-setup',      
    name: 'scheduleSetup',      
    component: ScheduleSetup    
  },{      
    path: '/schedule',      
    name: 'schedule',      
    component: Schedule    
  },
  {      
    path: '/schedule/addWeek',      
    props(route) {
      return route.query || {}
    },
    name: 'addWeek',      
    component: AddWeek    
  }]

  export default routes