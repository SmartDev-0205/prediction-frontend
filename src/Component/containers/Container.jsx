export default function Container({ className = '', children }) {
  return (
    <div className={`px-6 ${className}`}>
      {children}
    </div>
  )
}