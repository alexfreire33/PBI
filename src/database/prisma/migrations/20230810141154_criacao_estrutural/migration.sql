-- CreateTable
CREATE TABLE "tb_cliente" (
    "cd_cliente" UUID NOT NULL,
    "nm_cliente" VARCHAR(50),
    "nr_cpf" VARCHAR(12),
    "email" VARCHAR(250),

    CONSTRAINT "tb_cliente_pkey" PRIMARY KEY ("cd_cliente")
);

-- CreateTable
CREATE TABLE "tb_pesagem" (
    "cd_pesagem" UUID NOT NULL,
    "cd_cliente" UUID,
    "fl_ativo" BOOLEAN NOT NULL DEFAULT false,
    "vl_peso" DECIMAL(32,0),
    "dt_cadastro" TIMESTAMPTZ(6),

    CONSTRAINT "tb_cliente_pesagem_pkey" PRIMARY KEY ("cd_pesagem")
);

-- CreateTable
CREATE TABLE "tb_dispositivo" (
    "cd_dispositivo" UUID NOT NULL,
    "cd_cliente" UUID,

    CONSTRAINT "tb_dispositivo_pkey" PRIMARY KEY ("cd_dispositivo")
);

-- AddForeignKey
ALTER TABLE "tb_pesagem" ADD CONSTRAINT "tb_cliente_pesagem_cd_cliente_fkey" FOREIGN KEY ("cd_cliente") REFERENCES "tb_cliente"("cd_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_dispositivo" ADD CONSTRAINT "fk_tb_dispositivo_tb_cliente_1" FOREIGN KEY ("cd_cliente") REFERENCES "tb_cliente"("cd_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION;
