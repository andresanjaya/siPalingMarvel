import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters'

export default{
    namespaced: true,
    state() {
        return {
            coaches: 
            [
                {
                  id: 'c1',
                  firstName: 'Andre',
                  lastName: 'Sanjaya',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Andre and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Myoui',
                  lastName: 'Mina',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Mina and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                },
                {
                    id: 'c4',
                    firstName: 'Minatozaki',
                    lastName: 'Sana',
                    areas: ['frontend', 'career'],
                    description:
                      'I am Sana and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                  }
              ]
        }
    },
    mutations,
    actions,
    getters
}