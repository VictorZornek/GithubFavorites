// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'victorzornek',
                name: 'Victor Zornek',
                public_repos: '76',
                followers: '120000'
            },
            {
                login: 'diego3g',
                name: 'Diego Fernandes',
                public_repos: '76',
                followers: '120000'
            },

        ]

    }
}


// classe que vai criar a visualização e eventos do HTML

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            
            this.tbody.append(row)
        })

    }

    createRow() {
        const tr = document.createElement('tr')   // para criar um elemtno direto pela DOM

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/victorzornek.png" alt="Imagem de victorzornek">
                <a href="https://github.com/VictorZornek" target="_blank">
                    <p>Victor Zornek</p>
                    <span>victorzornek</span>
                </a>
            </td>
            <td class="repositories">
                76
            </td>
            <td class="followers">
                9589
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>
        
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}