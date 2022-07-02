export default {
  async contactCoach(context, payload) {
    const newRequest = {
      fullName: payload.fullName,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
      date: payload.date
    };
    const response = await fetch(
      `https://vue-first-project-19994-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-first-project-19994-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests.'
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        fullName: responseData[key].fullName,
        phoneNumber: responseData[key].phoneNumber,
        email: responseData[key].email,
        date: responseData[key].date
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
