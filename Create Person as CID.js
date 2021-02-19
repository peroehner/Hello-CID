import Block from '@ipld/block/defaults.js'

const example = async () => {
  const person = {
    name: 'Mikeal Rogers',
    github: 'mikeal',
    twitter: '@mikeal'
  }
  const block = Block.encoder(person, 'json')
  const cid = await block.cid()
  console.log(cid.toString())
}
example()
