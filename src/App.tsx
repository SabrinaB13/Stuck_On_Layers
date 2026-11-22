
import './App.css'

function App() { // This creates our main React component
  return ( //tells React what to display
    <div>
      <h1>Stuck on Layers</h1> 
      <p>Turn your SVG designs into 3D prints!</p>

      <button onClick={() => alert('SVG uploader coming soon!')}>
        Upload SVG
      </button> 
    </div>
  )
}

export default App 


