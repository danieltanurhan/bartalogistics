'use client'

import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Blog error:', error)
    this.setState({ 
      errorMessage: error.message || 'Something went wrong loading the blog posts.' 
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-content">
            <h2>Sorry, there was a problem</h2>
            <p>{this.state.errorMessage}</p>
            <button
              className="read-button"
              onClick={() => {
                this.setState({ hasError: false })
                window.location.reload()
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}