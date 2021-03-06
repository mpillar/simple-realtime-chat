let React = require('react');
let Fecha = require('fecha');

class Message extends React.Component{
    render(){
        let {message} = this.props;
        let createdAt = Fecha.format(new Date(message.createdAt), 'HH:mm:ss MM/DD/YY');
        return (
            <li className='message'>
                <div className='author'>
                    <strong>{message.author}</strong>
                    <i className='timestamp'>{createdAt}</i>
                </div>
                <div className='body'>{message.body}</div>
            </li>
        )
  }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
};

module.exports = Message;
