const onSuccess = ({ data }) => {
  if (data) {
    const { segments: stats } = data;
    const wins = stats?.season7Kills?.displayValue;
    document.getElementById('kills').innerHTML = `season 7 Kills: ${wins}`;
  }
};

const getApexData = () => {
  $.ajax({
    url:
      'https://public-api.tracker.gg/v2/apex/standard/profile/psn/Wally_wall10',
    type: 'GET',
    headers: {
      'TRN-Api-Key': '633b3926-d930-4b9a-b574-cf20b9de18b3',
      Accept: 'application/json',
      'Accept-Encoding': 'gzip',
    },
    success: onSuccess,
  });
};
