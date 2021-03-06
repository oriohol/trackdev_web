import { combineReducers } from 'redux'
import adminPanelUsers from './adminPanelUsers'
import courses from './courses'
import authedUser from './authedUser'
import error from './error'
import sprints from './sprints'
import tasks from './tasks'
import groupUsers from './groupUsers'


export default combineReducers({
    adminPanelUsers,
    authedUser,
    courses,
    sprints,
    tasks,
    groupUsers,
    error
})
