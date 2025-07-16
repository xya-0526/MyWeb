export default function () {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particleNum = 200
    const lineDistance = 120
    const colorRGB = '254, 250, 224'

    interface IParticle {
        x: number | null
        y: number | null
        velocityX: number
        velocityY: number
        size: number
        color: string
        draw(): void
        update(): void
    }

    const particles: Particle[] = []
    let interactionParticle: Particle | null = null

    class Particle implements IParticle {
        x: number | null
        y: number | null
        velocityX: number
        velocityY: number
        size: number
        color: string

        constructor(
            x: number,
            y: number,
            velocityX: number,
            velocityY: number,
            size: number,
            color: string
        ) {
            this.x = x
            this.y = y
            this.velocityX = velocityX
            this.velocityY = velocityY
            this.size = size
            this.color = color
        }

        draw(): void {
            if (this.x === null || this.y === null) return
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fillStyle = this.color
            ctx.fill()
        }

        update(): void {
            if (this.x === null || this.y === null) return

            if (this.x > canvas.width || this.x < 0) {
                this.velocityX *= -1
            }
            if (this.y > canvas.height || this.y < 0) {
                this.velocityY *= -1
            }

            this.x += this.velocityX
            this.y += this.velocityY
            this.draw()
        }
    }

    function getRandomArbitrary(min: number, max: number): number {
        return Math.random() * (max - min) + min
    }

    function createParticles(): void {
        for (let i = 0; i < particleNum; i++) {
            const size = getRandomArbitrary(1, 3)
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const velocityX = getRandomArbitrary(-2, 2)
            const velocityY = getRandomArbitrary(-2, 2)
            const color = `rgba(${colorRGB}, ${1 - size / 3})`
            particles.push(new Particle(x, y, velocityX, velocityY, size, color))
        }
    }

    function animate(): void {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((particle) => particle.update())
        connect()
    }

    function connect(): void {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i]
                const p2 = particles[j]
                if (p1.x === null || p1.y === null || p2.x === null || p2.y === null) continue

                const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
                if (distance < lineDistance) {
                    ctx.strokeStyle = `rgba(${colorRGB}, ${1 - distance / lineDistance})`
                    ctx.beginPath()
                    ctx.lineWidth = 0.8
                    ctx.moveTo(p1.x, p1.y)
                    ctx.lineTo(p2.x, p2.y)
                    ctx.stroke()
                }
            }
        }
    }

    function bindEvents(): void {
        canvas.addEventListener('mouseout', () => {
            if (interactionParticle) {
                interactionParticle.x = null
                interactionParticle.y = null
            }
        })

        canvas.addEventListener('mouseover', (e: MouseEvent) => {
            if (!interactionParticle) {
                interactionParticle = new Particle(e.x, e.y, 0, 0, 2, `rgba(${colorRGB}, 1)`)
                particles.push(interactionParticle)
            }
        })

        canvas.addEventListener('mousemove', (e: MouseEvent) => {
            if (interactionParticle) {
                interactionParticle.x = e.x
                interactionParticle.y = e.y
            }
        })
    }

    bindEvents()
    createParticles()
    animate()
}
