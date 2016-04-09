var InitialState = function() {

	return {
		userConfig: {
			location: {
				longitute: 0,
				latitude: 0
			},
			useSIUnits: false
		},
		dataRequests: {
			kIndexIsLoaded: false,
			forecastIsLoaded: false,
			noFlyZoneIsLoaded: false
		},
		kIndex: [
			{
				timeString: '12a',
				kIndexValue: 0
			},
			{
				timeString: '3a',
				kIndexValue: 0
			},
			{
				timeString: '6a',
				kIndexValue: 0
			},
			{
				timeString: '9a',
				kIndexValue: 0
			},
			{
				timeString: '12p',
				kIndexValue: 0
			},
			{
				timeString: '3p',
				kIndexValue: 0
			},
			{
				timeString: '6p',
				kIndexValue: 0
			},
			{
				timeString: '9p',
				kIndexValue: 0
			}
		],
		forecast: {},
		conditions: {
			advisories: [],
			flightStatus: 'CAUTION'
		}
	};

};

module.exports = InitialState;
