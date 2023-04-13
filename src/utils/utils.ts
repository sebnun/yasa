export const stripHtmlTags = (str: string) => {
  return str.replace(/(<([^>]+)>)/gi, "");
}

export const internetIsSlow = () => {
  // navigator.connection is not available in all browsers
  // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
  // The app should " ... give the end user feedback concerning errors or very slow internet connection."
  // For better UX, we should only do this when the user is trying to search for something
  // https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType

  //@ts-ignore
  if (navigator.connection.effectiveType !== '4g') {
    return true;
  } 

  return false;
}