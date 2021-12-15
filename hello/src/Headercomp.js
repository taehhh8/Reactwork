import React from "react";

class Headercomp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {headertitle:"This is My page of header"};
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {headertitle: props.newTitle};
        // state.headertitle = props.newTitle;
        // return (state.headertitle)
    // }

    // changeHeaderTitle = () => {
    //     this.setState({headertitle: "changeHeaderTitle !!!!!"})
    // }

    // shouldComponentUpdate() {
    //     return true;
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({headertitle: "componentDidMount thitlel!!!!"});
        }, 3000); 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before update title is " + prevState.headertitle + ", Before update newTitle is " + prevProps.newTitle ;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The update title is " + this.state.headertitle;
    }


    render() {
        return (
            <div>
                <h1>{this.state.headertitle}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
               
            </div>
        )
        // return (<h1>{this.state.headertitle}</h1>);
    }
}

export default Headercomp;