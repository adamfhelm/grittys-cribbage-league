import ACLSchedule from '@/views/schedules/ACLSchedule.vue';
import NCLSchedule from '@/views/schedules/NCLSchedule.vue';
import ScheduleSetup from '@/views/admin/newSchedule.vue';
import AddWeek from '@/views/admin/addWeek.vue';

const routes = [{      
    path: '/schedule-setup',      
    name: 'scheduleSetup',      
    component: ScheduleSetup    
  },{      
    path: '/acl-schedule',      
    name: 'aclSchedule',      
    component: ACLSchedule    
  },{      
    path: '/ncl-schedule',      
    name: 'nclSchedule',      
    component: NCLSchedule    
  },{      
    path: '/ncl-schedule/addWeek',      
    name: 'addWeek',      
    component: AddWeek    
  }]

  export default routes