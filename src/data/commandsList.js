const commands = [
  {
    value: 'clear',
    label: 'clear',
    cmd: 'cls',
    syntax: '',
    des: 'Clears screen'
  },
  {
    value: 'ls -l',
    label: 'ls -l',
    cmd: 'dir',
    syntax: '',
    des: 'Directory listing'
  },
  {
    value: 'mv --(1)',
    label: 'mv --(1)',
    cmd: 'rename',
    syntax: 'rename <filename1> <filename2>',
    des: 'Rename a file'
  },
  {
    value: 'mv --(2)',
    label: 'mv --(2)',
    cmd: 'move',
    syntax: 'move <source> <destination>',
    des: 'Move a file'
  },
  {
    value: 'cp',
    label: 'cp',
    cmd: 'copy',
    syntax: 'copy  <filename1> <filename2>',
    des: 'Copying a file'
  },
  {
    value: 'rm',
    label: 'rm',
    cmd: 'del',
    syntax: 'del <filename>',
    des: 'Delete file'
  },
  {
    value: 'diff',
    label: 'diff',
    cmd: 'fc',
    syntax: 'fc <filename1> <filename2>',
    des: 'Compares file contents'
  },
  {
    value: 'grep',
    label: 'grep',
    cmd: 'find',
    syntax: 'find "string" <filename>',
    des: 'Searches for a string of text in a file'
  },
  {
    value: 'man <command>',
    label: 'man <command>',
    cmd: '<command> /?',
    syntax: '<command> /?',
    des: 'Displays the manual/help details of the command'
  },
  {
    value: 'pwd',
    label: 'pwd',
    cmd: 'chdir',
    syntax: '',
    des: 'Displays the name of the current directory'
  },
  {
    value: 'cd',
    label: 'cd',
    cmd: 'cd',
    syntax: '',
    des: 'Displays the name of the current directory or changes the current directory'
  },
  {
    value: 'mkdir',
    label: 'mkdir',
    cmd: 'md',
    syntax: 'md <directoryname>',
    des: 'Create a directory'
  },
  {
    value: 'echo',
    label: 'echo',
    cmd: 'echo',
    syntax: 'echo <message>',
    des: 'Displays messages/Prints to screen'
  },
  {
    value: 'exit',
    label: 'exit',
    cmd: 'exit',
    syntax: '',
    des: 'Exit the command interpreter or the current batch script'
  },
  {
    value: 'cat',
    label: 'cat',
    cmd: 'type',
    syntax: 'type <filename>',
    des: 'Displays contents of a text file'
  },
  {
    value: 'chown',
    label: 'chown',
    cmd: 'attrib',
    syntax: 'attrib <parameter> <filename>',
    des: 'Displays, sets, or removes attributes assigned to files or directories'
  },
  {
    value: 'chmod',
    label: 'chmod',
    cmd: 'attrib',
    syntax: 'attrib <parameter> <filename>',
    des: 'Displays, sets, or removes attributes assigned to files or directories'
  },
  {
    value: 'rm -r',
    label: 'rm -r',
    cmd: 'rd /s',
    syntax: 'rd /s <directoryname>',
    des: 'Delete directory and is contents recursively'
  },
  {
    value: 'lsmod',
    label: 'lsmod',
    cmd: 'driverquery',
    syntax: '',
    des: 'Displays a list of installed device drivers and their properties'
  },
  {
    value: 'sudo lshw',
    label: 'sudo lshw',
    cmd: 'systeminfo',
    syntax: '',
    des: 'Displays detailed configuration information about a computer and its operating system'
  },
  {
    value: 'env',
    label: 'env',
    cmd: 'set',
    syntax: '',
    des: 'Displays, sets, or removes cmd.exe environment variables'
  },

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
