import React, { Component } from 'react';
import './index.css'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: [],
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.classes.length) return null

    const classes = createClassesArray(props)
    return { classes }

    function createClassesArray(props) {
      const { children, initialSlide } = props;
      if (!Array.isArray(children)) return []
      let classesArray = []

      // let id = Math.floor((children.length - 1) / 2)
      // let direction = 'before'
      // // console.log(id, "id");
      // children.forEach(() => {
      //   if (id === 0) direction = 'current'
      //   if (id < 0) direction = 'after'

      //   classesArray.push({ classname: direction, id: Math.abs(id) })
      //   id--
      // })
      // console.log(classesArray, "classesArray");


      if (initialSlide == 0) {
        classesArray[initialSlide] = { classname: 'current', id: 0 };
        classesArray[initialSlide + 1] = { classname: 'after', id: 1 };
        classesArray[children.length - 1] = { classname: 'before', id: 1 }
        for (let i = 2; i < children.length - 1; i++) {
          classesArray[i] = { classname: 'after', id: 9 }
        }
      } else if (initialSlide == children.length - 1) {
        classesArray[initialSlide] = { classname: 'current', id: 0 };
        classesArray[initialSlide - 1] = { classname: 'before', id: 1 };
        classesArray[0] = { classname: 'after', id: 1 };
        for (let i = 1; i < initialSlide - 1; i++) {
          classesArray[i] = { classname: 'before', id: 9 };
        }
      } else {
        for (let i = 0; i < children.length; i++) {
          if (i == initialSlide) {
            classesArray[i] = { classname: 'current', id: 0 };
          } else if (i == initialSlide - 1) {
            classesArray[i] = { classname: 'before', id: 1 };
          } else if (i == initialSlide + 1) {
            classesArray[i] = { classname: 'after', id: 1 };
          } else {
            if (i < initialSlide) {
              classesArray[i] = { classname: 'before', id: 9 };
            } else {
              classesArray[i] = { classname: 'after', id: 9 };
            }
          }
        }
      }


      console.log(classesArray, "classesArray");

      return classesArray
    }
  }



  moveSlide = (direction, count) => {
    let { classes } = this.state
    console.log('count', count)

    if (direction === 'after') {
      let start = classes.length - count
      let last = classes.splice(start, count)
      classes = [...last, ...classes]
    } else {
      let first = classes.splice(0, count)
      classes = [...classes, ...first]
    }
    this.setState({ classes })
    console.log(classes)

  }

  // sliderRef = (node) => { this.slider = node }

  renderSlides = () => {

    console.log("Carousel --- render");
    const { children, transition } = this.props
    if (!Array.isArray(children)) return <div></div>

    const { classes } = this.state
    return children.map((img, index) => {
      let classNames = 'slider3d__item slider3d__item--' + classes[index].classname + ' slider3d__item--' + classes[index].id
      let direction = classes[index].classname
      return (
        <li key={index}
          className={classNames}
          style={{ transition: `${transition}ms` }}
          onClick={() => this.moveSlide(direction, classes[index].id)}
        >
          {
            img
          }
        </li>
      )
    }
    )
  }

  render() {

    return (
      <div className="slider3d">
        <ul className="slider3d__items">
          {this.renderSlides()}
        </ul>


      </div>
    )
  }
}


export default Carousel

// https://nim-f.github.io/react-3dcarousel/