export const Task = (props) => {
    return( 
        <div className="stickerIn"> {/*you can pass anything as props, like the deletetask function from the app.js here */}
           <button onClick={ () => props.completeTask(props.id)} className="button2" 
          style= {{backgroundColor: props.completed ? "#adb" : "white"}} role="button">✓</button>
          <button onClick={ () => props.deleteTask(props.id)} className="button2" role="button">X</button>
         
          <br></br>
          <h1>{props.taskName}</h1>
          <br></br>
          </div>
      ); 
}