import React from 'react'

const Task = ({task: {id, title, state}, onArchiveTask, onPinnedTask}) => {
  return (
    <>
        <div className="list-item">
            <label htmlFor='title' aria-label='title'>
                <input type="text" value={title} readOnly={true} name='title' />
            </label>
        </div>
    </>
  )
}

export default Task