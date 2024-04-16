/*
ReactLikeButton
Build a "like button" component using React 16. The component should be the default export (use export default).

Requirements:
1. There should be a like button:
The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.
It should have a "like-button" class.
Wrap the number of likes in a span with a "likes-counter" class.
The initial number of likes in the counter should be 100.

2. Users can add a like. By clicking the button:
The number of likes should increase by one.
Like button should have "liked" class in addition to the "like-button" class (you can use the classnames tool for that).

3. Users can undo their like by clicking again on the button:
The counter should decrease by one.
"liked" class should be removed.
Assessment/Tools:
Only two imports are allowed: react (v16.8.6) and classnames (v2.2.5). Both are at the top of the starting code.
Use the animation below as a reference for your solution.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.
The "Preview" tab will display your component. You can use it for testing purposes.
*/

// https://www.npmjs.com/package/classnames/v/2.2.5
import cx from 'classnames';
import { Component } from 'react';

const styles = `
    .like-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:  #585858;
    }
    .liked {
        font-weight: bold;
        color: #1565c0;
    }
`;

export default class LikeButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 100,
            liked: false
        };
    }

    onButtonClick = () => {
        const { liked, count } = this.state;

        this.setState({
            count: liked ? count - 1 : count + 1,
            liked: !liked
        });
    };

    renderStyles = () => {
        return <style>{styles}</style>;
    };

    renderCount = () => {
        return (
            <span className="likes-counter">
                {this.state.count}
            </span>
        );
    };

    render () {
        const
            { liked } = this.state,

            btnClass = cx({
                'like-button': true,
                'liked': liked
            });

        return (
            <>
                <button
                    className={btnClass}
                    onClick={this.onButtonClick}
                >
                    {'Like | '}
                    {this.renderCount()}
                </button>
                {this.renderStyles()}
            </>
        );
    }
}

/*
// Codepen

// https://cdnjs.cloudflare.com/ajax/libs/react/16.14.0/umd/react.production.min.js
// https://cdnjs.cloudflare.com/ajax/libs/classnames/2.2.5/index.min.js

//import { default as React } from 'react';
//import { default as ReactDOM } from 'react-dom';
//https://legacy.reactjs.org/docs/state-and-lifecycle.html

const LikeButton1 = () => {
  const 
    [count, setCount] = React.useState(100),
    [liked, setLiked] = React.useState(false),
  
    btnClass = classNames({
      'like-button': true,
      'liked': liked
    });
  
  const onButtonClick = () => {
    setCount(liked ? count - 1 : count + 1);
    setLiked(!liked);
  };
  
  return (
    <button className={btnClass} onClick={onButtonClick}>
      {'Like | '}
      <span className="likes-counter">
        {count}
      </span>
    </button>
  );
};

class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 100,
      liked: false
    };
  }
  
  onButtonClick = () => {
    const { liked, count } = this.state;
    
    this.setState({
      count: liked ? count - 1 : count + 1,
      liked: !liked
    });
  };
  
  render() {
    const 
      { liked, count } = this.state,
          
      btnClass = classNames({
        'like-button': true,
        'liked': liked
      });
    
    return (
      <button className={btnClass} onClick={this.onButtonClick}>
        {'Like | '}
        <span className="likes-counter">
          {count}
        </span>
      </button>
    );
  }
};

ReactDOM.render(<LikeButton1/>, document.getElementById('example'));

*/
