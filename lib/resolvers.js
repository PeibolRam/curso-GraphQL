'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 1',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  }

]

module.exports = {
  getCourses: () => {
    return courses
  }
}
