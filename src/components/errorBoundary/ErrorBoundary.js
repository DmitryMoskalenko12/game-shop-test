import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return 'Произошла ошибка';
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
