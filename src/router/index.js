import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingInputTextarea from '../views/DataBindingInputTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribue from '../views/DataBindingAttribue.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingList from '../views/DataBindingList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindinginputtextarea',
    name: 'DataBindingInputTextarea',
    component: DataBindingInputTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DatabidingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
