export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response =  await fetch(`https://vue-first-project-19994-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    })

    if (!response.ok) {
      //
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  }
};