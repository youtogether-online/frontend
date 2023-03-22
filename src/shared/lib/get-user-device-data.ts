import Bowser from 'bowser'

export const getUserDeviceData = () => {
  const device = Bowser.getParser(window.navigator.userAgent)

  return `${device.getOS().name} ${device.getOS().version} ${
    device.getBrowser().name
  } ${device.getBrowserVersion()}`
}
