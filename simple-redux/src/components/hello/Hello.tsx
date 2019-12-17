import React, { Component } from 'react'; // let's also import Component
import './Hello.scss';

interface IChildComponentProps extends React.Props<any> {
}

interface PassedProps extends React.Props<any> {
  title: any
}

type States = {
  count: number,
  text: string
}

export class Hello extends Component<IChildComponentProps & PassedProps, States> {
  componentWillMount() {
  }

  componentDidMount() {
  }

  get componentTitle(): String {
    return `Hello component ${this.props.title}`;
  }

  render() {
    return <div>
      <span className="hello title">{this.componentTitle}</span>
    </div>
  }
}