var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.nameField;

    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {      
      this.setState({
        name: name
      });
    }

  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onClick}>
          <input type="text" ref="nameField"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Russel'

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
