import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

// import TutorialDataService from "../services/tutorial.service";
import ITutorialData from "../types/tutorial.type";

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentTutorial: ITutorialData;
  message: string;
}

export default class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.getTutorial = this.getTutorial.bind(this);
    // this.updatePublished = this.updatePublished.bind(this);
    // this.updateTutorial = this.updateTutorial.bind(this);
    // this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    // this.getTutorial(this.props.match.params.id);
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

//   getTutorial(id: string) {
//     TutorialDataService.get(id)
//       .then((response) => {
//         this.setState({
//           currentTutorial: response.data,
//         });
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   updatePublished(status: boolean) {
//     const data: ITutorialData = {
//       id: this.state.currentTutorial.id,
//       title: this.state.currentTutorial.title,
//       description: this.state.currentTutorial.description,
//       published: status,
//     };

//     TutorialDataService.update(data, this.state.currentTutorial.id)
//       .then((response) => {
//         this.setState((prevState) => ({
//           currentTutorial: {
//             ...prevState.currentTutorial,
//             published: status,
//           },
//           message: "The status was updated successfully!"
//         }));
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   updateTutorial() {
//     TutorialDataService.update(
//       this.state.currentTutorial,
//       this.state.currentTutorial.id
//     )
//       .then((response) => {
//         console.log(response.data);
//         this.setState({
//           message: "The tutorial was updated successfully!",
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   deleteTutorial() {
//     TutorialDataService.delete(this.state.currentTutorial.id)
//       .then((response) => {
//         console.log(response.data);
//         this.props.history.push("/tutorials");
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

  render() {
    return (
        <div>tutorial</div>
    )
  }
}