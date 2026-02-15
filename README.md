# 🚚 Kafka Node Delivery System

A simple Node.js project demonstrating Apache Kafka concepts including:

- Producers
- Consumers
- Consumer Groups
- Manual Partition Routing
- Kafka Admin (Topic Creation)
- Docker-based Kafka setup

---

## 📌 Project Overview

This project simulates a delivery routing system:

- A **Producer** sends rider details with location.
- Messages are routed to partitions based on location.
- Multiple **Consumers** process messages using consumer groups.
- Kafka **Admin** script creates topics with partitions.

---

## 🏗️ Architecture

Producer → Kafka Topic (`first-topic`) → Partitions → Consumer Groups

Partition Logic:

- `east` → Partition 0
- Any other location (`west`, `north`, etc.) → Partition 1

---

## 🛠️ Tech Stack

- Node.js
- KafkaJS
- Apache Kafka (Docker)
- Zookeeper
- Git & GitHub

---

## 📂 Project Structure

