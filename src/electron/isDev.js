export default function isDev() {
  // Check if the environment is development
  return process.env.NODE_ENV === 'development';
}