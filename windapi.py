import requests

def get_user_location():
    try:
        ipinfo_response = requests.get('https://ipinfo.io/?token=86747a7a9a810d')
        ipinfo_data = ipinfo_response.json()
        return ipinfo_data['loc'].split(',')
    except Exception as e:
        raise ValueError('Unable to fetch user location') from e

def get_wind_info(latitude, longitude):
    try:
        stormglass_api_key = '9607a3fa-4863-11ee-92e6-0242ac130002-9607a4d6-4863-11ee-92e6-0242ac130002'
        headers = {
            'Authorization': stormglass_api_key,
        }
        stormglass_response = requests.get(
            f'https://api.stormglass.io/v2/weather/point?lat={latitude}&lng={longitude}&params=windSpeed,windDirection',
            headers=headers
        )
        stormglass_data = stormglass_response.json()
        return int(stormglass_data['hours'][0]['windSpeed']['icon'])
    except Exception as e:
        raise ValueError('Unable to fetch wind information') from e

def main():
    try:
        latitude, longitude = get_user_location()
        wind_info = get_wind_info(latitude, longitude)
        print(wind_info)
    except Exception as e:
        print('An error occurred:', e)

if __name__ == '__main__':
    main()
