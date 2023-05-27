import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='listaRedes'>
                <a href='#' >
                    <img src="/imagens/fb.png" />
                </a>
                <a href='#' >
                    <img src="/imagens/tw.png" />
                </a>
                <a href='#' >
                    <img src="/imagens/ig.png" />
                </a>
            </div>


            <img src="/imagens/logo.png"/>

            <p>Desenvolvido por Lucas Machado</p>
        </footer>
    )
}

export default Rodape