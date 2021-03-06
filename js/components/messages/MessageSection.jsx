let React = require('react');

let MessageList = require('./MessageList.jsx');
let MessageForm = require('./MessageForm.jsx');

class MessageSection extends React.Component{
    render(){
        let {activeChannel} = this.props;
        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.object.isRequired,
    addMessage: React.PropTypes.func.isRequired
};

module.exports = MessageSection;