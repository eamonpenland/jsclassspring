var mailboxData = {
  userName: 'eamon.penland',
  password: 'xxxxxxxxxxxxx',
  mailboxes: [
    'inbox',
    'sent',
    'starred',
    'recent'
  ],
  contacts: [
    {
      name: 'Eoin',
      messages: [
        23223,
        23948,
        98983,
      ],
      lastOnline: '9:53am'
    },
    {
      name: 'Eoin',
      messages: [
        23223,
        23948,
        98983,
      ],
      lastOnline: '9:53am'
    }
  ],
  activeConversations: [
    {
      messages: [
        {
          text: 'Javascript is awesome',
          time: '3894729724'
        },
        {
          text: 'Javascript is sucky',
          time: '38947294343'
        },
        {
          text: 'Elixir is better',
          time: '38947294343'
        }
      ],
      senderId: 2324,
    }
  ]
};


var inboxNames = mailboxData.contacts.map(contact => contact.name)
var inboxNamesLong = mailboxData.contacts.map(function(contact){ return contact.name
})

mailboxData.activeConversations[0].messages[3] = {text: 'testing', time: '39479347934'}
