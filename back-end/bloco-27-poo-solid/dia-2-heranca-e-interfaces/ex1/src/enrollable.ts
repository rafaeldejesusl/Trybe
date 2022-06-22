interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

export default Enrollable;