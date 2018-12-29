
const initialState = {
  infoUserSprints: null,
  selectedStory: null
}

// Reducers:
const setSprints = (state, action) => {
  return {
    ...state,
    infoUserSprints: action.payload.infoUserSprints
  }
}

const resetSprints = (state) => {
  return {
    ...state,
    infoUserSprints: null
  }
}

const setSelectedStory = (state, action) => {
  return {
    ...state,
    selectedStory: action.payload.selectedStory
  }
}

const resetSelectedStory = (state) => {
  return {
    ...state,
    selectedStory: null
  }
}

// root reducer
const sprints = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_SPRINTS': return setSprints(state, action)
    case 'RESET_SPRINTS': return resetSprints(state)
    case 'SET_SELECTED_STORY': return setSelectedStory(state, action)
    case 'RESET_SELECTED_STORY': return resetSelectedStory(state)
    default: return state
  }
}

export default sprints
