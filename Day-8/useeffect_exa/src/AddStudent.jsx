function AddStudent({ newstu, setNewStu, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newstu} 
        onChange={(e) => setNewStu(e.target.value)}
        placeholder="Enter student name"
      />
      <button type="submit">Add Student</button>
    </form>
  )
}

export default AddStudent