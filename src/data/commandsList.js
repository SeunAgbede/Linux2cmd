const commands = [
  {
    value: 'clear',
    label: 'clear',
    cmd: 'cls',
    note: 'This clears the screen'
  },
  {
    value: 'ls',
    label: 'ls',
    cmd: 'dir',
    note: 'This lists files in the current working directory'
  },
  {
    value: 'ls -l',
    label: 'ls -l'
  },
  {
    value: 'pwd',
    label: 'pwd'
  },
  {
    value: 'who',
    label: 'who'
  }
]

// alphabetically sort the linux commands
const commandsList = commands.sort((a, z) => {
  if (a.value < z.value) {
    return -1;
  }
  if (a.value > z.value) {
    return 1;
  }
  return 0;
});

export default commandsList
