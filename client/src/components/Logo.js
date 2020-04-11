import React, {Component} from "react";

class Logo extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            text: props.text,
            color: props.style.container.color,
            fontSize: props.style.container.fontSize,
            backgroundColor: props.style.container.backgroundColor,
            border: 'solid',
            borderColor: props.style.container.borderColor,
            borderRadius: props.style.container.borderRadius,
            borderWidth: props.style.container.borderWidth,
            padding: props.style.container.padding,
            margin: props.style.container.margin,
            maxWidth: 'max-content',
            minWidth: 'min-content',
        }
    }

    render() {
        this.style = {
            container: {
                color: this.state.color,
                fontSize: this.state.fontSize + 'pt',
                backgroundColor: this.state.backgroundColor,
                border: 'solid',
                borderColor: this.state.borderColor,
                borderRadius: this.state.borderRadius + '%',
                borderWidth: this.state.borderWidth + 'px',
                padding: this.state.padding + 'px',
                margin: this.state.margin + 'px',
                maxWidth: 'max-content',
                minWidth: 'min-content'
            }
        }
        return (
            <div className="col s8" style={{overflow: 'auto'}}>
                <div style={this.style.container}>
                    {this.state.text}
                </div>
            </div>
        )
    }
}

export default Logo;