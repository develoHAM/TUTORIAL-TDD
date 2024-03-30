class Stack {
	constructor() {
		this.top = -1;
		this.items = {};
	}

	get peek() {
		return this.items[this.top];
	}

	push(value) {
		this.top += 1;
		this.items[this.top] = value;
	}

	pop() {
		delete this.items[this.top];
		this.top -= 1;
		return this.items[this.top];
	}
}

describe('My Stack', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('is created empty', () => {
		expect(stack.top).toBe(-1);
		expect(stack.items).toEqual({});
	});

	it('can push to the top', () => {
		stack.push('a');
		expect(stack.top).toBe(0);
		expect(stack.peek).toBe('a');
	});

	it('can pop off', () => {
		stack.push('a');
		const popped = stack.pop();
		expect(stack.top).toBe(-1);
		expect(stack.peek).toBe(popped);
	});
});
