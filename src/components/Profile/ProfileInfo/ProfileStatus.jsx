import React from "react";
import Preloader from "../../common/preloader/preloader";

export class ProfileStatus extends React.Component {
  //   statusInputRef = React.createRef();
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    // debugger;
    // console.log(this);
    this.setState({
      editMode: true,
      //   status: this.props.status,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <h2 onDoubleClick={this.activateEditMode}>
              {/* this.activateEditMode.bind(this) */}
              {this.props.status || "--------"}
            </h2>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
