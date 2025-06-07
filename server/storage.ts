import { 
  users, 
  consultationRequests,
  type User, 
  type InsertUser,
  type ConsultationRequest,
  type InsertConsultationRequest
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private consultationRequests: Map<number, ConsultationRequest>;
  private currentUserId: number;
  private currentConsultationId: number;

  constructor() {
    this.users = new Map();
    this.consultationRequests = new Map();
    this.currentUserId = 1;
    this.currentConsultationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = this.currentConsultationId++;
    const consultationRequest: ConsultationRequest = {
      id,
      firstName: insertRequest.firstName,
      lastName: insertRequest.lastName,
      email: insertRequest.email,
      phone: insertRequest.phone ?? null,
      practiceName: insertRequest.practiceName,
      staffSize: insertRequest.staffSize,
      message: insertRequest.message ?? null,
      createdAt: new Date(),
    };
    this.consultationRequests.set(id, consultationRequest);
    return consultationRequest;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values());
  }
}

export const storage = new MemStorage();
