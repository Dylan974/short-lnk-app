import React from 'react';
import { Session } from 'meteor/session';

export default class LinksListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisible: true
        };
    }

    componentDidMount() {
        this.visibleLinksTracker = Tracker.autorun(() => {
            this.setState({ showVisible: Session.get('showVisible') });
        });
    }

    componentWillUnmount() {
        this.visibleLinksTracker.stop();
    }

    render() {
        return (
            <div>
                <label className="checkbox">
                    <input className="checkbox__box" type="checkbox" checked={!this.state.showVisible} onChange={(e) => {
                        Session.set('showVisible', !e.target.checked);
                    }}/>
                    show hidden links
                </label>
            </div>
        );
    }
}