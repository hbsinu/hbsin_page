import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="preloader-mark" aria-hidden="true">
        <span />
      </div>
      <p>Loading portfolio experience...</p>
    </div>
  )
}

export default Preloader
